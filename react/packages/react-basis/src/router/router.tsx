import { useRoutes, Navigate } from "react-router-dom";
import ChangePic from "../components/ChangePic";
import ClassComponentSetState from "../components/ClassComponentSetState ";
import Home from "../components/Home";
import Student from "../components/Student";
import Ball from "../components/Ball";
import Event from "../components/Event";
import { PagerTest } from '@handle-react/components'
import DeepSetState from "../components/DeepSetState ";
import Lifecycle from "../components/Lifecycle";
import ModalTest from "../components/ModalTest";
import ThreeLayoutTest from "../components/ThreeLayoutTest";
import Form from "../components/Form";
import EncapsulationForm from "../components/EncapsulationForm";
import HOC from "../components/HOC";
import Ref from "../components/ref";
import { BannerTest } from '@handle-react/components'
import Content from "../components/Context";
import ContextForm from '../components/ContextForm/Test'
import PureComponent from "../components/PureComponent";
import RenderProps from "../components/renderProps";
import ErrorBoundaries from "../components/ErrorBoundaries";
import ReactEvent from "../components/react-event";


function Router(props: any) {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: '/changePic',
            element: <ChangePic />
        },
        {
            path: '/student',
            element: <Student />
        }, {
            path: '/ClassComponentSetState',
            element: <ClassComponentSetState />
        },
        {
            path: '/Ball',
            element: <Ball />
        },
        {
            path: '/Event',
            element: <Event />
        }, {
            path: '/Pager',
            element: <PagerTest />
        },
        {
            path: '/DeepSetState',
            element: <DeepSetState />
        },
        {
            path: '/Lifecycle',
            element: <Lifecycle />
        },
        {
            path: '/ModalTest',
            element: <ModalTest />
        },
        {
            path: '/ThreeLayoutTest',
            element: <ThreeLayoutTest />
        },
        {
            path: '/Form',
            element: <Form />
        },
        {
            path: '/EncapsulationForm',
            element: <EncapsulationForm />
        },
        {
            path: '/hoc',
            element: <HOC />
        },
        {
            path: '/ref',
            element: <Ref />
        },
        {
            path: '/Banner',
            element: <BannerTest />
        },
        {
            path: '/Content',
            element: <Content />
        },
        {
            path: '/ContextForm',
            element: <ContextForm />
        }, {
            path: '/PureComponent',
            element: <PureComponent />
        },
        {
            path: '/renderProps',
            element: <RenderProps />
        }, {
            path: '/ErrorBoundaries',
            element: <ErrorBoundaries />
        }

    ]);
}

export default Router;