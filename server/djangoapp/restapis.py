import requests
import os
from dotenv import load_dotenv

load_dotenv()

backend_url = os.getenv(
"backend_url",
default="http://localhost:3030"
)

sentiment_analyzer_url = os.getenv(
"sentiment_analyzer_url",
default="http://localhost:5050/"
)

def get_request(endpoint, **kwargs):
params = ""
for key, value in kwargs.items():
params += f"{key}={value}&"

```
request_url = backend_url + endpoint
if params:
    request_url += "?" + params

response = requests.get(request_url)
response.raise_for_status()
return response.json()
```

def analyze_review_sentiments(text):
request_url = sentiment_analyzer_url + "analyze/" + text
response = requests.get(request_url)
response.raise_for_status()
return response.json()

def post_review(data_dict):
request_url = backend_url + "/insert_review"
response = requests.post(request_url, json=data_dict)
response.raise_for_status()
return response.json()
