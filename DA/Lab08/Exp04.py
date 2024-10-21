import reflex as rx
import requests

class GithubState(rx.State):
    url: str = "https://github.com/reflex-dev"
    profile_image: str = (
        "https://avatars.githubusercontent.com/u/104714959"
    )

    def set_profile(self, username: str):
        if username == "":
            return
        github_data = requests.get(
            f"https://github.com/LuisTorr35{username}"
        ).json()
        self.url = github_data["url"]
        self.profile_image = github_data["avatar_url"]

def index():
    return rx.hstack(
        rx.link(
            rx.avatar(src=GithubState.profile_image),
            href=GithubState.url,
        ),
        rx.input(
            placeholder="Your Github username",
            on_blur=GithubState.set_profile,
        ),
    )

# Add state and page to the app.
app = rx.App()
app.add_page(index, title="Reflex:Github")
