const productValidator = (data) => {
    let errors = {};
    const { name, category, price, description, image } = data;

    if (!name || name.length < 3 || name.trim() === '') {
        errors.name = 'Name must be at least 3 characters!';
    }

    if (!category || category.length < 3 || category.trim() === '') {
        errors.category = 'You must choose a category!';
    }

    if (!price || price <= 0 || isNaN(Number(price))) {
        errors.price = 'Price must be a positive number!';
    }

    if (!description || description.length < 3 || description.trim() === '') {
        errors.description = 'Description must be at least 3 characters!';
    }

    if (!image || image.trim() === '') {
        errors.image = 'You must provide an image URL!';
    }

    return Object.keys(errors).length ? errors : false;
};

export { productValidator };
