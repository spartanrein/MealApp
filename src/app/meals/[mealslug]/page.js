export default function MealPostPage({params}) {
    return (
        <>
            <h1>Meal Post</h1>
            <p>{params.mealslug}</p>
        </>
    )
}