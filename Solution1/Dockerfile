FROM python:2.7.10

RUN pip install -U pytest
COPY sorting.py sorting.py
COPY input.txt input.txt
COPY test_sorting.py test_sorting.py
RUN [ "py.test", "test_sorting.py" ]
CMD ["python", "sorting.py"]
