from flask import Flask, render_template

app = Flask(__name__)

# ---------- Portfolio routes ----------

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/skills')
def skills():
    return render_template('skills.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')




ANIME_CHARACTERS = [
    'luffy', 'ichigo', 'eren', 'gojo',
    'goku', 'naruto', 'thorfinn','subaru'
]

@app.route('/anime/<character>')
def anime_character(character):
    if character not in ANIME_CHARACTERS:
        return render_template('404.html'), 404
    return render_template(f'anime/{character}.html')


if __name__ == "__main__":
    app.run()