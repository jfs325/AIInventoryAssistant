import datetime, callOpenAI, csvConverter
from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

chatGPT_call = reqparse.RequestParser()
chatGPT_call.add_argument("commands",
                                    type=str,
                                    help="Please enter commands",
                                    required=True)
chatGPT_call.add_argument("title",
                          type=str,
                          help="Please enter a title",
                          required=True)

class chatGPT_Call(Resource):
    def post(self):
        args = chatGPT_call.parse_args()
        commands = args['commands']
        now = datetime.datetime.now()
        date = now.strftime("%m/%d/%Y")
        title = args['title'] + "\t" + str(date)

        processed_commands = callOpenAI.callOpenAI(commands)
        csv_data = csvConverter.generate_csv(processed_commands)
        response = {
            'csv_data': csv_data,
            'title': title,
            'created_on': now.strftime("%m/%d/%Y, %H:%M:%S")
        }

        return response

api.add_resource(chatGPT_Call, "/api/callopenai")

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=True)