import sys
import json

def predict_health(keywords):
    # Flatten to lowercase for uniform comparison
    keywords = [k.lower() for k in keywords]

    # Example rule-based conditions
    if "fever" in keywords and ("cough" in keywords or "cold" in keywords):
        return ("Flu", 6)
    elif "headache" in keywords and "nausea" in keywords:
        return ("Migraine", 7)
    elif "stomach pain" in keywords or "vomiting" in keywords:
        return ("Food Poisoning", 8)
    elif "chest pain" in keywords or "breathless" in keywords:
        return ("Heart Problem", 9)
    elif "fatigue" in keywords or "tired" in keywords:
        return ("Fatigue", 4)
    elif "anxiety" in keywords or "stress" in keywords:
        return ("Anxiety Disorder", 5)
    else:
        return ("General Weakness", 3)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Unknown Condition,0")
        sys.exit(0)

    # Node.js will pass JSON string of keywords
    input_data = sys.argv[1]
    try:
        keywords = json.loads(input_data)
    except:
        print("Invalid Input,0")
        sys.exit(0)

    problem, severity = predict_health(keywords)
    print(f"{problem},{severity}")
