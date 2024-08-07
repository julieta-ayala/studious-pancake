from flask import Flask
import datetime

app = Flask(__name__)

# Decorator to tell Flask what URL should trigger the function
@app.route('/time')
def getTime():
    return {'date': datetime.datetime.now()}

if __name__ == '__main__':
    app.run(debug=True)