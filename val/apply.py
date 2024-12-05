import os
import re

def create_flask_files(input_text):
    # Create the main folder
    base_dir = "./"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)

    # Define regex patterns for extracting file contents
    file_patterns = {
        "app.py": r"### app\.py \(Flask application\)\n```python\n(.*?)```",
        "templates/index.html": r"### templates/index\.html\n```html\n(.*?)```",
        "static/css/style.css": r"### static/css/style\.css\n```css\n(.*?)```",
        "static/js/script.js": r"### static/js/script\.js\n```javascript\n(.*?)```",
    }

    # Extract file content and create files
    for file_path, pattern in file_patterns.items():
        match = re.search(pattern, input_text, re.DOTALL)
        if match:
            content = match.group(1)
            full_path = os.path.join(base_dir, file_path)
            os.makedirs(os.path.dirname(full_path), exist_ok=True)
            with open(full_path, "w") as f:
                f.write(content)

if __name__ == "__main__":
    print("Paste the input text below (end with a line containing only 'END'):")
    input_lines = []
    while True:
        line = input()
        if line.strip() == "END":
            break
        input_lines.append(line)
    input_text = "\n".join(input_lines)
    create_flask_files(input_text)
    print("Files created successfully in the 'slot_machine_app' directory.")
