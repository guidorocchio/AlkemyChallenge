const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiTransactionsRouter = require('./api/transactions');


router.use('/users', apiUsersRouter);
router.use('/transactions', apiTransactionsRouter);


module.exports = router;