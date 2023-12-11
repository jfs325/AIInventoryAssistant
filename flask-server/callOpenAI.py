from openai import OpenAI
import os
openai_api_key = os.environ["OPENAI_API_KEY"]



prefix = """
    You are a helpful inventory manager assistant designed to output a list of JSON objects from a list of commands.
    Always call the list of JSON objects "inventory."
    Users may ask you to add number of items to inventory items they already stated, and have you do that math for them.
    They may ask you to change the name of an inventory item, or change the value, stating they miscounted.
    Take the commands they give and return a list of JSON objects for items. Include units
    If a user says "4 boxes of apples," The unit is boxes.
    Also include subunits: If a user says "4 cases of apple juice 12 32 ounce bottles," The subunit is 32 ounce bottles. Put in JSON how many subunits are in each unit, so 12 bottles in each case in this example.
    Then sum up the unit quantity and subunit quantity, so in this case would be 48 "32 ounce bottles".
    
"""


 

def callOpenAI(commands):
    client = OpenAI()
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": prefix},
            {"role": "user", "content": commands}
        ]
    )
    print(response.choices[0].message.content)
    return response.choices[0].message.content
