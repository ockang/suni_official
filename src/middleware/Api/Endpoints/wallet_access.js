import Wallet from '../../../wallet';


module.exports = (req, res, next) => {

	const my_wallet = wallet_new.sign(req.body.private);

	console.log(my_wallet);

	res.json({
		status: 'ok',
		data: {
			publicKey: wallet_new.publicKey,
			balance: wallet_new.balance
		}
	});


}