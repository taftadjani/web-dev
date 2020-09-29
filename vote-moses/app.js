$(function() {
    const form = document.querySelector('.first-page-form');
    const firstPages = document.querySelectorAll('.first-page');
    const candidats = document.querySelectorAll('.candidat');
    const results = document.querySelectorAll('.result');
    const votePresidentBtns = document.querySelectorAll('.second-page-president .box-user>button');
    const voteSecretaireBtns = document.querySelectorAll('.second-page-secretaire .box-user>button');
    let votes = []

    const clearBtns = voteBtns => {
        voteBtns.forEach(voteBtn => {
            voteBtn.textContent = "Vote";
        });
    }
    votePresidentBtns.forEach((voteBtn) => {
        voteBtn.addEventListener('click', e => {
            if (e.target.textContent === "Voted") {
                clearBtns(votePresidentBtns);
                const elt = votes.find(elt => elt.email === form.email.value);
                elt.president = undefined;
                console.log(votes);
            } else {
                clearBtns(votePresidentBtns);
                e.target.textContent = "Voted";
                const elt = votes.find(elt => elt.email === form.email.value);
                elt.president = e.target.value;
                console.log(votes);
            }
        });
    });

    voteSecretaireBtns.forEach((voteBtn) => {
        voteBtn.addEventListener('click', e => {
            if (e.target.textContent === "Voted") {
                clearBtns(voteSecretaireBtns);
                const elt = votes.find(elt => elt.email === form.email.value);
                elt.secretaire = undefined;
                console.log(votes);
            } else {
                clearBtns(voteSecretaireBtns);
                e.target.textContent = "Voted";
                const elt = votes.find(elt => elt.email === form.email.value);
                elt.secretaire = e.target.value;
                console.log(votes);
            }
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Ajout du mail dans l'array
        if (!(votes.find(elt => elt.email === form.email.value))) {
            votes.push({ email: form.email.value, president: undefined, secretaire: undefined });
        }

        for (let i = 0; i < 2; i++) {
            // console.log(firstPages[i]);
            firstPages[i].classList.add('hide');
            candidats[i].classList.remove('hide');
            // results[i].classList.remove('hide');
        }
    });
});