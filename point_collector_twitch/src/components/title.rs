use yew::{html, Component, Html, Properties};

use crate::App;

#[derive(Properties, Clone, Default)]
pub struct TitleProps {
    pub value: String,
}

pub struct Title {
    value: String,
}

impl Component for Title {
    type Message = ();

    type Properties = TitleProps;

    fn create(props: Self::Properties, _link: yew::ComponentLink<Self>) -> Self {
        Self { value: props.value }
    }

    fn update(&mut self, msg: Self::Message) -> yew::ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> yew::ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <h1>{&self.value}</h1>
        }
    }
}
