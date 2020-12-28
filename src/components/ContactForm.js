import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactForm = ({ data }) => {
  return (
    <>
      <Form
        method="post"
        action="https://formspree.io/f/mzbkkkpj"
        className="form"
      >
        <Form.Group controlId="name">
          <Form.Label className="font-weight-bold">Imię i nazwisko</Form.Label>
          <Form.Control
            type="text"
            placeholder="Imię i nazwisko"
            name="Imię i nazwisko"
            required
          />
        </Form.Group>
        <Form.Group controlId="telephone">
          <Form.Label className="font-weight-bold">Numer telefonu</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Numer telefonu"
            name="Telefon"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            required
          />
          <Form.Text className="text-muted">Format: 123-456-789</Form.Text>
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label className="font-weight-bold">Temat wiadomości</Form.Label>
          <Form.Control as="select" name="Tytuł wiadomości" required>
            <option>Zapytanie ogólne</option>
            <option>Ubezpieczenie domu/mieszkania</option>
            <option>Ubezpieczenie samochodu</option>
            <option>Ubezpieczenie na życie</option>
            <option>Ubezpieczenie firmy</option>
            <option>Ubezpieczenie turystyczne</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label className="font-weight-bold">Treść wiadomości</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="Treść wiadomości"
            required
          />
        </Form.Group>
        <Form.Check
          type={"checkbox"}
          id={`terms-agree`}
          label={`Wyrażam zgodę na przetwarzanie moich danych osobowych przez Elwart Finanse Mateusz Elwart z siedzibą w Bydgoszczy, ul. Karola Szajnochy 2, w celu udzielenia odpowiedzi, w tym przedłożenia oferty jeśli o nią pytam. Moje dane osobowe będą przetwarzane do czasu cofnięcia zgody lub przez okres niezbędny do ustalenia, dochodzenia lub obrony roszczeń. Mam prawo dostępu do danych, sprostowania, usunięcia lub ograniczenia przetwarzania, prawo sprzeciwu, prawo wniesienia skargi do organu nadzorczego i prawo do przeniesienia danych.`}
          required
        />
        <Button type="submit" className="btn-navy">
          Wyślij
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
