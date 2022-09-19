from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("Dojo-survey.html")


@app.route('/users', methods=['POST', 'GET'])
def create_user():
    if request.method == 'POST':
        name_from_form = request.form['name']
        email_from_form = request.form['email']
        location = request.form['location']
        language = request.form['fav_lang']
        comment = request.form['comment']
        return render_template("show.html", name_on_template=name_from_form, email_on_template=email_from_form, locat = location, lang = language, com = comment)
    else:
        return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
