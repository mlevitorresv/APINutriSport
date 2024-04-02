use nutrisport;

-- Tabla de facturas
CREATE TABLE bills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    beneficiary VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    type ENUM('compra', 'alquiler', 'nómina') NOT NULL,
    paymentAmount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL
);

-- Tabla de comentarios
CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    date DATE NOT NULL
);

-- Tabla de clientes
CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    postalCode VARCHAR(5) NOT NULL,
    birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL
);

-- Tabla de empleados
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    DNI VARCHAR(12) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    postalCode VARCHAR(5) NOT NULL,
    address TEXT NOT NULL,
    job VARCHAR(255) NOT NULL,
    startDate DATE NOT NULL,
    contract ENUM('partner', 'undefinedTime', 'certainTime') NOT NULL,
    active BOOLEAN NOT NULL,
    socialSecurity BIGINT NOT NULL,
    bankAccount VARCHAR(255) NOT NULL
);

-- Tabla de productos
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    SKU VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    category ENUM('accessories', 'preWorkouts', 'protein', 'creatine', 'intraWorkouts', 'other') NOT NULL,
    PVP DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    photos JSON NOT NULL,
    ingredients TEXT NOT NULL,
    energy DECIMAL(10, 2) NOT NULL,
    fats DECIMAL(10, 2) NOT NULL,
    carbohydrates DECIMAL(10, 2) NOT NULL,
    proteins DECIMAL(10, 2) NOT NULL,
    salt DECIMAL(10, 2) NOT NULL,
    weight DECIMAL(10, 2) NOT NULL,
    dimensions VARCHAR(50) NOT NULL,
    instructions TEXT NOT NULL
);

-- Tabla de ventas
CREATE TABLE sales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    employee_id INT,
    date DATE NOT NULL,
    payMethod ENUM('cash', 'creditCard') NOT NULL,
    invoiceNumber VARCHAR(255) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Tabla de proveedores
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    postalCode VARCHAR(5) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    web VARCHAR(255) NOT NULL,
    category ENUM('products', 'rent') NOT NULL
);

-- Relación muchos a muchos entre ventas y productos
CREATE TABLE sales_products (
    sale_id INT,
    product_id INT,
    PRIMARY KEY (sale_id, product_id),
    FOREIGN KEY (sale_id) REFERENCES sales(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
