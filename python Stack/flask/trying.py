
from distutils.log import debug
from flask import Flask
skill_app= Flask(__name__)

@skill_app.route("/")
def homepage():
    return "hello world!"

@skill_app.route("/dojo")
def about():
    return "dojo"

if __name__=="__main__":
    
    skill_app.run(debug=True, port=5000)