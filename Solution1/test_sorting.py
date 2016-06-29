#vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4 
#!/usr/bin/python

import pytest
import os
import __builtin__


def test_file_exist(monkeypatch):
    monkeypatch.setattr(__builtin__,'raw_input', lambda prompt :"input.txt")
    from sorting import get_file_name
    f = get_file_name() 
    assert f == "input.txt"


def test_file_doesnot_exist(monkeypatch):
    with pytest.raises(AssertionError):
        monkeypatch.setattr(__builtin__,'raw_input', lambda prompt :"input0.txt")
        from sorting import get_file_name
    	f = get_file_name()     

def test_process_text():
    from sorting import process_text, write_file
    op_filename = "output.txt"
    
    contents = "2Streaks\n 10 Chicken Wings\n 343GuiltySparks"
    dic = process_text(contents)
    write_file(dic)
    file_op = open(op_filename, 'r')
    op = file_op.read()
    assert op == "2Streaks\n10 Chicken Wings\n343GuiltySparks\n"
    file_op.close()   
 
    contents = "2Bag\n 1 Wings\n 3GreetingCards"
    dic = process_text(contents)
    write_file(dic)
    file_op = open(op_filename, 'r')
    op = file_op.read()
    assert op == "1 Wings\n2Bag\n3GreetingCards\n"
    file_op.close()

    contents = "Few Items\n 30Orders\n Snack2\n snack2\n 5\n.%$\n"
    dic = process_text(contents)
    write_file(dic)
    file_op = open(op_filename, 'r')
    op = file_op.read()
    assert op == "5\n30Orders\n.%$\nFew Items\nSnack2\nsnack2\n"
    file_op.close()
    
    contents = "Few Items\n 30Orders\n Snack2\n fish\n 5\n.%$\n"
    dic = process_text(contents)
    write_file(dic)
    file_op = open(op_filename, 'r')
    op = file_op.read()
    assert op == "5\n30Orders\n.%$\nFew Items\nfish\nSnack2\n"
    file_op.close()


