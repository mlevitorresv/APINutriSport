import express from 'express'
import { authMiddleware } from './middleware/auth'
import { loginRouter } from './controllers/login'
import { mongoConnect } from './config/db'
import { billRouter } from './controllers/bill'
import { commentRouter } from './controllers/comment'
import { customerRouter } from './controllers/customer'
import { employeeRouter } from './controllers/employee'
import { productRouter } from './controllers/product'
import { saleRouter } from './controllers/sale'
import { supplierRouter } from './controllers/supplier'
import { publicRouter } from './public/public'


export const app = express()


mongoConnect();
app.use(express.json())

app.use('/login', loginRouter)
app.use('/public', publicRouter)

app.use(authMiddleware);

app.use('/bills', billRouter)

app.use('/comments', commentRouter)

app.use('/customers', customerRouter)

app.use('/employees', employeeRouter)

app.use('/products', productRouter)

app.use('/sales', saleRouter)

app.use('/suppliers', supplierRouter)