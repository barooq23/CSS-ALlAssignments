from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def initial_render():
    return "go to http://localhost:5000/play to have it do something "


@app.route("/play")
def block_render():
    return render_template('play1.html', repeat=3, colorChange="skyblue")


@app.route("/play/<number_of_boxes>")
def block_repeat(number_of_boxes):
    repeat = int(number_of_boxes)
    return render_template('play1.html', repeat=repeat, colorChange="skyblue")


@app.route("/play/<number_of_boxes>/<color_change>")
def box_color(number_of_boxes, color_change):
    repeat = (int(number_of_boxes))
    colorChange = color_change
    return render_template('play1.html', repeat=repeat, colorChange=colorChange)


if __name__ == "__main__":
    app.run(debug=True)
