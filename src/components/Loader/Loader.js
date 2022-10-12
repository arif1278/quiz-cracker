export const cartData = async () => {
    const cartData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const card = await cartData.json()
    return card;
}
export const dynamicCartData = async ({ params }) => {
    const cartData = await fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
    const card = await cartData.json()
    return card;
}
