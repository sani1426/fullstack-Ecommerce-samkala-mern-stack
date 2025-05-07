import SummaryApi from '../common/index'

const fetchProductByCategory = async (category)=> {
    const response = await fetch(`${SummaryApi.GetProductsByCategory.url}/${category}`)

    const result = await response.json()

    return result
}

export default fetchProductByCategory