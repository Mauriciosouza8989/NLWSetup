const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('button')

button.addEventListener('click', add)

function add() {
    form.addEventListener('change', save)
    const toDay = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(toDay)
    if (dayExists) {
        alert('Dia já incluso🔴')
        return
    }
    nlwSetup.addDay(toDay)
    setTimeout(() => {
        alert('Dia adicionado com sucesso ✅')

    }, 0);
}


function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()