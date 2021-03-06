import { WebGLRenderer, Line, Shape3dMode, Vec3, RGBColor, MouseHelper } from "webgl-renderer";
import { IMouseHandler } from "./iMouseHandler";

export class LineMouseHandler implements IMouseHandler
{
    private line: Line;

    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shapeMode: Shape3dMode, color: RGBColor): void
    {
        let point: Vec3 = MouseHelper.mouseEventToWebGlPoints(event, canvas);
        this.line = new Line(point, renderer.gl, color);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGLRenderer, shape: Shape3dMode, color: RGBColor): void
    {
        if (mouseIsDown)
        {
            let point: Vec3 = MouseHelper.mouseEventToWebGlPoints(event, canvas);
            this.line.addVertex(point);
        }
    }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shapeMode: Shape3dMode, color: RGBColor): void
    {
        let point = MouseHelper.mouseEventToWebGlPoints(event, canvas);
        this.line.addVertex(point);
        renderer.addShapeToScene(this.line);
    }
}