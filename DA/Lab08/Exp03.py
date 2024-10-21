import reflex as rx
from rxconfig import config

class EstadoFormulario(rx.State):
    nombre: str = ""
    email: str = ""
    mensaje: str = ""
    alerta: str = ""  # Variable para el mensaje de alerta

    def enviar_formulario(self):
        if "@" not in self.email:
            self.set_alerta("Error: Dirección de correo electrónico no válida")
        else:
            self.set_alerta("Formulario enviado correctamente")

    def set_alerta(self, mensaje: str):
        self.alerta = mensaje


def index() -> rx.Component:
    return rx.fragment(
        rx.heading("Formulario de Contacto"),
        rx.form(
            rx.input(
                placeholder="Nombre",
                on_change=EstadoFormulario.set_nombre,
            ),
            rx.input(
                placeholder="Correo electrónico",
                on_change=EstadoFormulario.set_email,
            ),
            rx.text_area(
                placeholder="Mensaje",
                on_change=EstadoFormulario.set_mensaje,
            ),
            rx.button("Enviar", on_click=EstadoFormulario.enviar_formulario),
        ),
        rx.cond(
            EstadoFormulario.alerta != "",
            rx.box(EstadoFormulario.alerta, style={"color": "red"}),  # Se usa rx.box para mostrar el mensaje
        ),
    )


app = rx.App()
app.add_page(index)
