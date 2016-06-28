#vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
#!/usr/bin/python
from collections import defaultdict
import sys
import os
import re

def get_file_name():
    file_ip = raw_input("Enter the path of the input file: ")
    assert os.path.exists(file_ip), "File not found, "+str(file_ip)
    return file_ip

def read_contents(file_ip):
    f = open(file_ip,'r+')
    #Reading the contents from file
    text = f.read()
    f.close()
    return text

def process_text(text):
    contents = text.split("\n")
    dic=defaultdict(list)
    for key in contents:
        str = key.strip()
        c = re.search("\D", str)
        # If the line has atleast one alphabet
	if c:
            index = c.start()
	    #If there is a preceding number in the line
	    if index != 0:
            	dic[int(str[0:index])].append(str[index:len(str)])
	    #If the line contains only alphabets
	    else:
		dic[''].append(str[index:len(str)])
	# If the line has only numbers
	else:
	    c = re.search("\d", str)
	    if c:
	    	dic[int(str)].append("")
    return dic

def write_file(dic):
#Writing the contents to a file
    file_op = open('output.txt', 'w')
    for k in sorted(dic.keys()):
        value = sorted(dic[k])
        for v in value:
    	    print "%s%s" %(k,v)
	    file_op.write("%s%s" %(k,v))
	    file_op.write("\n")
    file_op.close()

if __name__=="__main__":
    file_ip = get_file_name()
    contents = read_contents(file_ip)
    dic = process_text(contents)
    write_file(dic)
