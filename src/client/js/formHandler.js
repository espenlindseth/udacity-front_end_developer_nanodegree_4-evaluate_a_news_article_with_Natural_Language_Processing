function handleSubmit(event) {
    event.preventDefault()

    const inputText = document.getElementById('name').value
    if (Client.validUrl(inputText)) {
        const url = inputText
        fetch("/api-url", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        })
        .then(res => res.json())
            .then(data => {
                document.getElementById("result").classList.add('show');
                document.getElementById("aylien-polarity").innerHTML = data.polarity;
                document.getElementById("aylien-polarity-confidence").innerHTML =
                  data.polarity_confidence;
                document.getElementById("aylien-subjectivity").innerHTML =
                  data.subjectivity;
                document.getElementById("aylien-subjectivity-confidence").innerHTML =
                  data.subjectivity_confidence;
                document.getElementById("aylien-submitted-text").innerHTML =
                  data.text;
                console.log(data);
            });
 } else {
        const text = inputText
        fetch("/api-text", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        })
        .then(res => res.json())
            .then(data => {
                document.getElementById("result").classList.add('show');
                document.getElementById("aylien-polarity").innerHTML = data.polarity;
                document.getElementById("aylien-polarity-confidence").innerHTML =
                  data.polarity_confidence;
                document.getElementById("aylien-subjectivity").innerHTML =
                  data.subjectivity;
                document.getElementById("aylien-subjectivity-confidence").innerHTML =
                  data.subjectivity_confidence;
                document.getElementById("aylien-submitted-text").innerHTML =
                  data.text;
                console.log(data);
            });
    }
}

export { handleSubmit }
