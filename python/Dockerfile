FROM python:3.4-slim
RUN pip install flask
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD ["python", "run.py"]
