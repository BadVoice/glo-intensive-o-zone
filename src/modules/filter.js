import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter, hotSaleFilter } from "./filters"



const filter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkBoxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter((hotSaleFilter(data, checkBoxInput.checked)), minInput.value, maxInput.value))
        })
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter((hotSaleFilter(data, checkBoxInput.checked)), minInput.value, maxInput.value))
        })
    })

    checkBoxInput.addEventListener('change', () => {
        console.log('change');
        console.log(checkBoxInput.checked);
        if (checkBoxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(priceFilter((hotSaleFilter(data, checkBoxInput.checked)), minInput.value, maxInput.value))
        })
    })
}


export default filter