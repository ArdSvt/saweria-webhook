let data = [];

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { donator_name, donator_email, amount_raw, message } = req.body;
    let config = {
      donator: donator_name || 'Anonim',
      email: donator_email || 'Tidak ada',
      amount: amount_raw || 0,
      message: message || "tidak ada pesan",
      time: new Date()
    };
    data.push(config);
    console.log('Donasi diterima:', config);
    console.log(req.body)
    console.log(data);
    res.status(200).json({ message: 'Data diterima' });
  } else if (req.method === 'GET') {
    res.status(200).json({ status: true, donate: data[data.length - 1] });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export default handler;
