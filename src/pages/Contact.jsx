export default function Contact() {
  return (
    <div>
      <form
        action=''
        style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
      >
        <input type='text' placeholder='İsim' />
        <input type='text' placeholder='Soyisim' />
        <input type='textarea' placeholder='Mesajınızı girin' />
        <button>Gönder</button>
      </form>
    </div>
  );
}
