
""" Print the disassembly of the function object "test"
    defined below.
"""
def question1():
    import dis as d
    def test():
        return {'a': 1, 'b': 2}
    #print disassembly here, you may wish to import items in the stdlib if necessary
    d.dis(test)
    

""" Using the predefined list, "test_list", group the list
    into new lists by the first letter of each item in the list.
    Your final solution should return a list of lists whose members
    all have the same first letter.
"""
def question2():
    test_list = ["alligator", "bear", "cat", "crocodile", "beaver", "ape", "bee", "coati", "aardvark"]
    grouped_list = []
    # group the list by first letter here, you may wish to import items in the stdlib if necessary
    intermediate = {}
    for word in test_list: 
        if word[0] in intermediate.keys():
            intermediate[word[0]].append(word)
        else:
            intermediate[word[0]] = [word]
    [grouped_list.append(x) for x in intermediate.values()]
    print grouped_list
    return grouped_list

""" Create a class, "TinyObject", which uses up a very small amount of memory per instance.
    The class must have 3 instance attributes, "a", "b", and "c", and a readonly instance property,
    "combo" which simply returns the concatenated values of "a", "b", and "c"
"""
def question3():
    TinyObject = None
    # create the class here, you may wish to import items in the stdlib if necessary
    return TinyObject

question2()
question1()