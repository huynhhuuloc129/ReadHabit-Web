import logging
import re

from bs4 import BeautifulSoup
from markdown import markdown
from pyvi import ViTokenizer

logging.basicConfig(format='%(levelname)s : %(message)s', level=logging.INFO)
logging.root.level = logging.INFO


with open('./data/vni_stopwords.txt', encoding='utf-8') as f:
    stopwords = []
    for line in f:
        stopwords.append("_".join(line.strip().split()))


def preprocessing_tags(soup, tags=None):
    if tags is not None:
        for tag in tags:
            for sample in soup.find_all(tag):
                sample.replaceWith('')
    else:
        raise NotImplementedError("Tags must be set!")

    return soup.get_text()


def html_to_text(markdown_string, parser="html.parser",
                     tags=['pre', 'code', 'a', 'img', 'i']):
    """ Converts a html string to plaintext
    https://stackoverflow.com/questions/18453176
    """

    # import mistune  # noqa

    soup = BeautifulSoup(markdown_string, parser)
    text = preprocessing_tags(soup, tags)

    text = remove_links_content(text)
    text = remove_emails(text)
    text = remove_punctuation(text)
    text = text.replace('\n', ' ')
    text = remove_numeric(text)
    text = remove_multiple_space(text)
    text = text.lower().strip()
    text = ViTokenizer.tokenize(text)
    text = remove_stopwords(text, stopwords=stopwords)

    return text


def markdown_process(content, markdown=markdown, tags_space=None):

    import mistune  # noqa

    markdown = mistune.Markdown()
    html_doc = markdown(content)
    soup = BeautifulSoup(html_doc, 'html.parser')

    for tag in soup.find_all(['pre']):
        tag.replace_with('')
    for tag in soup.find_all(['img']):
        tag.replace_with('')
    for tag in soup.find_all(['a']):
        tag.replace_with('')

    text = soup.text
    text = text.replace('\n', ' ')
    text = re.sub(r'[^\w\s]', ' ', text)
    text = text.lower()
    text = text.strip()

    for tag in tags_space:
        text = text.replace(tag, tags_space[tag])

    return text


def remain_tags_space(text, tags_space):
    """
    :param tags_space: tag to remained
        {
            "ruby on rails": "ruby_on_rails",
            ...
        }
    """
    for tag in tags_space:
        text = text.replace(tag, tags_space[tag])
    return ['_'.join(tag.split()) for tag in tags_space]


def remove_emails(text):
    return re.sub('\S*@\S*\s?', '', text)


def remove_newline_characters(text):
    return re.sub('\s+', ' ', text)


def remove_links_content(text):
    text = re.sub(r"http\S+", "", text)
    return text


def remove_multiple_space(text):
    return re.sub("\s\s+", " ", text)


def remove_punctuation(text):
    """https://stackoverflow.com/a/37221663"""
    import string  # noqa
    table = str.maketrans({key: None for key in string.punctuation})
    return text.translate(table)


def remove_numeric(text):
    import string  # noqa
    table = str.maketrans({key: None for key in string.digits})
    return text.translate(table)


def remove_html_tags(text):
    """Remove html tags from a string"""
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)


def remove_stopwords(text, stopwords):
    return " ".join([word for word in text.split() if word not in stopwords])
