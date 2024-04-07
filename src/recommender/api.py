from flask import Flask
from flask_restful import Resource, Api
from flask import request
import requests
app = Flask(__name__)
api = Api(app)
from utils import html_to_text
from gensim.utils import simple_preprocess
from distances import get_most_similar_documents
import numpy as np
from flask_cors import CORS, cross_origin

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def load_model():
    import gensim  # noqa
    import joblib  # noqa
    # load LDA model
    lda_model = gensim.models.LdaModel.load(
        './models/LDA.model'
    )
    # load corpus
    corpus = gensim.corpora.MmCorpus(
        './models/corpus.mm'
    )
    # load dictionary
    id2word = gensim.corpora.Dictionary.load(
        './models/id2word.dictionary'
    )
    # load documents topic distribution matrix
    doc_topic_dist = joblib.load(
        './models/doc_topic_dist.dat'
    )
    # doc_topic_dist = np.array([np.array(dist) for dist in doc_topic_dist])

    return lda_model, corpus, id2word, doc_topic_dist

lda_model, corpus, id2word, doc_topic_dist = load_model()

def make_texts_corpus(sentences):
    for sentence in sentences:
        yield simple_preprocess(sentence, deacc=True)


col = []
try:
    req = requests.get('http://localhost:3000/api/posts?limit=1000&offset=0&sortField=createdAt&sortOrder=desc&status=published')
    data = req.json()['data']
    i =0
    for post in data:
        col.append({
            'index': i,
            'id': post['id'] ,
            'title': post['title'],
            'publishDate': post['publishDate'],
            'totalLike': post['totalLike'],
            'totalDislike': post['totalDislike'],
            'totalShare': post['totalShare'],
            'readTime': post['readTime'],
            'content': post['content']
        }) 
        i+=1
except Exception as e:
    print(e)

class HelloWorld(Resource):
    @cross_origin()
    def get(self):
        id = request.args.get('id')
        req = requests.get('http://localhost:3000/api/posts/' + str(id))
        main_post = req.json()
        current_post = {
            "id" : main_post["id"],
            "title": main_post["title"],
            "content": main_post["content"]
        }

        # preprocessing
        content = html_to_text(current_post["content"])
        text_corpus = make_texts_corpus([content])
        bow = id2word.doc2bow(next(text_corpus))
        doc_distribution = np.array(
            [doc_top[1] for doc_top in lda_model.get_document_topics(bow=bow)]
        )

        # recommender posts
        most_sim_ids = list(get_most_similar_documents(
            doc_distribution, doc_topic_dist))[0:]

        result = []
        result2 = []
        
        most_sim_ids = [int(id_) for id_ in most_sim_ids]
        for id in most_sim_ids:
            for (index, value) in enumerate(col):
                if int(value['index']) == int(id):
                    print(id, value['title'])
                    result.append(value['id'])
                    result2.append(value['title'])

        return {'ids': result, 'title': result2}

api.add_resource(HelloWorld, '/api/')

if __name__ == '__main__':
    app.run(debug=True)