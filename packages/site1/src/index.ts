import 'zerollup-demo-site1/bootstrap'
import config from 'zerollup-demo-site1/config'
import {faceAngel, faceCool} from 'zerollup-demo-lib2'
import faceSmile from './face-smile.png'

export default function app(node) {
    console.log(node, config, faceAngel, faceCool, faceSmile)
}
