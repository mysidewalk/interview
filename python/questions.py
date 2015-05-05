def question_1():
    """ Define a function that creates a list of length 100. For most elements in the list, their 
        value should be the same as their index, i.e. my_list[0] = 0, my_list[79] = 79, etc.
        For indexes that are multiples of three, the value should be "Fizz".
        For indexes that are multiples of five, the value should be "Buzz".
        For indexes that are multiples of both three and five, the value should be "FizzBuzz".
    """
    my_list = None
    # assign and/or populate my_list here
    return my_list

def question_2():
    """ Compare the operations, option_a and option_b, below by adding code to print their
        disassembly.
        Comment on and contrast their byte code (use commented lines for your commentary). Which one
        do you expect to be faster and why? Your final solution should return a 2-tuple of the form
        (faster_option, 'string describing why it is faster')
    """
    my_choice = (None, None)
    def option_a():
        return map(lambda x: pow(x, 2), (1, 2, 3, 4, 5))
    def option_b():
        return [x**2 for x in (1, 2, 3, 4, 5)]
    # add call to print disassembly, comment containing both disassemblies,
    # and assign faster option along with reasoning here, i.e.:
    # print some_disassembly
    # # option_x -
    # # 3           0 LOAD_CONST               1 (1) - Loads the constant value 1
    # #             3 RETURN_VALUE - Returns the constant value
    # # option_y -
    # # 3           0 LOAD_CONST               1 (2) - Loads the constant value 2
    # #             3 RETURN_VALUE - Returns the constant value
    # my_choice = (option_x, "cuz it's faster")
    return my_choice

def question_3():
    """ Using the predefined list, "test_list", group the list into new lists by the first letter of
        each item in the list.
        Your final solution should return a list of lists whose members all have the same first
        letter and should prefer the use of a functional approach over a "for" loop.
    """
    test_list = ["alligator", "bear", "cat", "crocodile", "beaver", "ape", "bee", "coati", "aardvark"]
    grouped_list = None
    # group the list by first letter here, you may wish to import items in the stdlib if necessary
    return grouped_list

def question_4():
    """ Create a class, "TinyObject", which uses up a very small amount of memory per instance.
        The class must have 3 instance attributes, "a", "b", and "c", and a readonly instance property,
        "combo" which simply returns the concatenated values of "a", "b", and "c"
    """
    TinyObject = None
    # create the class here, you may wish to import items in the stdlib if necessary
    return TinyObject

def question_5():
    """ Redefine the inheritance of classes W, X, and Y such that class Z has a method resolution
        order of:
        Z, W, X, C, D, B, A, Y, E, object
    """
    O = object
    class A(O): pass
    class B(O): pass
    class D(B): pass
    class C(D, A): pass
    class E(O): pass
    # Define correct inheritance of W, X, and Y here
    class W(): pass
    class X(): pass
    class Y(): pass
    # The following code should be left alone
    class Z(W, X, Y): pass
    return Z.mro()

def question_6():
    """ Define a data descriptor that will hold a value when set (you can assume this value is a string)
        and return either an empty string appended to the owning instance's class name or the value that
        was set appended to the owning instance's class name.
        i.e.:
        class A(object): some_attribute = YourDescriptor()
        a = A()
        a.some_attribute = ' B C'
        # the following should print 'A B C' if YourDescriptor is properly implemented
        print a.some_attribute
    """
    # Replace this class definition with your solution
    class YourDescriptor(object):
        pass
    # The following code should be left alone
    class A(object):
        some_attribute = YourDescriptor()
    a = A()
    a.some_attribute = ' was implemented correctly!'
    return a.some_attribute
