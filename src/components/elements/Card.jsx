import useCategories from '../../hooks/useCategories';

const Category = () => {
    const { categories, loading, error } = useCategories();

    const formatDescription = (description) => {
        const periodIndex = description.indexOf('.');
        return periodIndex !== -1 ? description.slice(0, periodIndex + 1) : description;
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div id="card">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl font-bold my-10 text-center">Foods</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {categories.map((category) => (
                        <div key={category.id} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    alt={category.strCategory}
                                    src={category.strCategoryThumb}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <p className="mt-4 text-lg font-medium text-gray-900">{category.strCategory}</p>
                            <h3 className="mt-1 text-sm font-medium text-gray-700">{formatDescription(category.strCategoryDescription)}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
