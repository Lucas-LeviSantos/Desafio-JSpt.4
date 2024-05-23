const showAll = document.querySelector("#show")
const list = document.querySelector("ul")
const discontAll = document.querySelector("#discont")
const sumAll = document.querySelector("#sum")
const filterAll = document.querySelector("#filter")

const formatValue = (value) => {
    return value.toLocaleString('pt-br',
    {style: 'currency',
     currency: 'BRL'})
}

const showAllItens = (receptorList) => {
    let myList = ``
    receptorList.forEach(product => {
        myList +=
            myList = `
                    <li>
                        <img src="${product.src}" alt="Hambúrguer ${product.name}">
                        <p>${product.name}</p>
                        <p class="valor">${formatValue(product.price)}</p>
                    </li>
                `
    });

    list.innerHTML = myList
}

const discontAllItens = () => {
    const newList = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAllItens(newList)
}

const sumAllItens = () => {
    const totalValue = menuOptions.reduce((acc, product) => acc + product.price, 0)
    let li = `
                    <li>
                        <p>A valor total é</p>
                        <p class="valor">${formatValue(totalValue)}</p>
                    </li>
            `
    list.innerHTML = li
}

const filterItens = () => {
    const filter = menuOptions.filter(product => product.vegan)
   
    showAllItens(filter)
}

showAll.addEventListener("click", () => showAllItens(menuOptions))
discontAll.addEventListener("click", discontAllItens)
sumAll.addEventListener("click", sumAllItens)
filterAll.addEventListener("click", filterItens)