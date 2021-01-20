import * as React from "react";
import { Link } from "gatsby";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
      >
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,follow" />
        <title>Polityka prywatności – Bydgoszcz – Elwart Ubezpieczenia</title>
        <meta name="description" content="" />
      </Helmet>
      <Navigation />
      <Container className="mt-5">
        <h1 className="h2 font-weight-bold mb-4 border-heading mb-3">
          Polityka prywatności
        </h1>

        <main className="single-offer">
          <ol>
            <li>
              Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
              adresem url:{" "}
              <a href="https://elwartubezpieczenia.pl/">
                elwartubezpieczenia.pl
              </a>
            </li>
            <li>
              Operatorem serwisu oraz Administratorem danych osobowych jest:
              Elwart Finanse Mateusz Elwart Strażacka 37a, 89-200 Rynarzewo
            </li>
            <li>
              Adres kontaktowy poczty elektronicznej operatora:
              dawid@elwart.com.pl
            </li>
            <li>
              Operator jest Administratorem Twoich danych osobowych w
              odniesieniu do danych podanych dobrowolnie w Serwisie.
            </li>
            <li>
              Serwis wykorzystuje dane osobowe w następujących celach:
              <ul>
                <li>Obsługa zapytań przez formularz</li>
                <li>Prezentacja oferty lub informacji</li>
              </ul>
            </li>
            <li>
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
              ich zachowaniu w następujący sposób:
              <ul>
                <li>
                  Poprzez dobrowolnie wprowadzone w formularzach dane, które
                  zostają wprowadzone do systemów Operatora.
                </li>
                <li>
                  Poprzez zapisywanie w urządzeniach końcowych plików cookie
                  (tzw. „ciasteczka”).
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="h2 font-weight-bold mb-4 border-heading mb-3">
            Wybrane metody ochrony danych stosowane przez Operatora
          </h2>

          <ol>
            <li>
              Miejsca logowania i wprowadzania danych osobowych są chronione w
              warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
              dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
              komputerze użytkownika i mogą być odczytane jedynie na docelowym
              serwerze.
            </li>
            <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
            <li>
              W celu ochrony danych Operator regularnie wykonuje kopie
              bezpieczeństwa.
            </li>
            <li>
              Istotnym elementem ochrony danych jest regularna aktualizacja
              wszelkiego oprogramowania, wykorzystywanego przez Operatora do
              przetwarzania danych osobowych, co w szczególności oznacza
              regularne aktualizacje komponentów programistycznych.
            </li>
          </ol>

          <h2 className="h2 font-weight-bold mb-4 border-heading mb-3">
            Hosting
          </h2>

          <ol>
            <li>
              Serwis jest hostowany (technicznie utrzymywany) na serwerze
              operatora:{" "}
              <a href="lh.pl" rel="nofollow">
                lh.pl
              </a>
            </li>
          </ol>

          <h2 className="h2 font-weight-bold mb-4 border-heading mb-3">
            Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
          </h2>

          <ol>
            <li>
              W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
              dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
              wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
              ciążących na Administratorze. Dotyczy to takich grup odbiorców:
              <ul>
                <li>ubezpieczyciele</li>
                <li>
                  upoważnieni pracownicy i współpracownicy, którzy korzystają z
                  danych w celu realizacji celu działania strony
                </li>
              </ul>
            </li>
            <li>
              Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
              niż jest to konieczne do wykonania związanych z nimi czynności
              określonych osobnymi przepisami (np. o prowadzeniu rachunkowości).
              W odniesieniu do danych marketingowych dane nie będą przetwarzane
              dłużej niż przez 3 lata.
            </li>
            <li>
              Przysługuje Ci prawo żądania od Administratora:
              <ul>
                <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>oraz przenoszenia danych.</li>
              </ul>
            </li>
            <li>
              Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
              przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych
              osobowych w celu wykonania prawnie uzasadnionych interesów
              realizowanych przez Administratora, w tym profilowania, przy czym
              prawo sprzeciwu nie będzie mogło być wykonane w przypadku
              istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania,
              nadrzędnych wobec Ciebie interesów, praw i wolności, w
              szczególności ustalenia, dochodzenia lub obrony roszczeń.
            </li>
            <li>
              Na działania Administratora przysługuje skarga do Prezesa Urzędu
              Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
            </li>
            <li>
              Podanie danych osobowych jest dobrowolne, lecz niezbędne do
              obsługi Serwisu.
            </li>
            <li>
              W stosunku do Ciebie mogą być podejmowane czynności polegające na
              zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
              świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia
              przez Administratora marketingu bezpośredniego.
            </li>
            <li>
              Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
              przepisów o ochronie danych osobowych. Oznacza to, że nie
              przesyłamy ich poza teren Unii Europejskiej.
            </li>
          </ol>

          <h2 className="h2 font-weight-bold mb-4 border-heading mb-3">
            Informacje w formularzach
          </h2>

          <ol>
            <li>
              Serwis zbiera informacje podane dobrowolnie przez użytkownika, w
              tym dane osobowe, o ile zostaną one podane.
            </li>
            <li>
              Serwis może zapisać informacje o parametrach połączenia
              (oznaczenie czasu, adres IP).
            </li>
            <li>
              Serwis, w niektórych wypadkach, może zapisać informację
              ułatwiającą powiązanie danych w formularzu z adresem e-mail
              użytkownika wypełniającego formularz. W takim wypadku adres e-mail
              użytkownika pojawia się wewnątrz adresu url strony zawierającej
              formularz.
            </li>
            <li>
              Dane podane w formularzu są przetwarzane w celu wynikającym z
              funkcji konkretnego formularza, np. w celu dokonania procesu
              obsługi zgłoszenia serwisowego lub kontaktu handlowego,
              rejestracji usług itp. Każdorazowo kontekst i opis formularza w
              czytelny sposób informuje, do czego on służy.
            </li>
          </ol>

          <h2 className="h2 font-weight-bold mb-4 border-heading mb-3">
            Istotne techniki marketingowe
          </h2>
          <ol>
            <li>
              Operator stosuje analizę statystyczną ruchu na stronie, poprzez
              Google Analytics (Google Inc. z siedzibą w USA). Operator nie
              przekazuje do operatora tej usługi danych osobowych, a jedynie
              zanonimizowane informacje. Usługa bazuje na wykorzystaniu
              ciasteczek w urządzeniu końcowym użytkownika. W zakresie
              informacji o preferencjach użytkownika gromadzonych przez sieć
              reklamową Google użytkownik może przeglądać i edytować informacje
              wynikające z plików cookies przy pomocy narzędzia:
              https://www.google.com/ads/preferences/
            </li>
          </ol>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default NotFoundPage;
