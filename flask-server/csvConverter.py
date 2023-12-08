import csv
import json
import io

def generate_csv(json_data):

    # Load JSON data
    data = json.loads(json_data)

    # Create an in-memory file-like object
    csv_file = io.StringIO()

    # Create a CSV writer object
    csv_writer = csv.writer(csv_file)

    # Write the header (column names)
    header = data['inventory'][0].keys()
    csv_writer.writerow(header)

    # Write the data
    for item in data['inventory']:
        csv_writer.writerow(item.values())

    # Get CSV data as a string
    csv_data = csv_file.getvalue()

    # Return CSV data as part of the response
    return csv_data
