import numpy as np
from scipy.stats import entropy


def jensen_shannon(query, matrix):

    p = query[None, :].T  
    q = matrix.T  

    m = 0.5 * (p + q)
    return np.sqrt(0.5 * (entropy(p, m) + entropy(q, m)))


def get_most_similar_documents(query, matrix, k=10):

    sims = jensen_shannon(query, matrix)
    return sims.argsort()[:k]
