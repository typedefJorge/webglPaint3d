import { IMouseHandler } from "./iMouseHandler";
import { WebGLRenderer, Shape3dMode, RGBColor, MouseHelper } from "webgl-renderer";

export class   RenderModeMouseHandler implements IMouseHandler
{
    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shape: Shape3dMode, color: RGBColor): void
    {
        let point = MouseHelper.mouseEventToWebGlPoints(event, canvas);
        renderer.addXYZPointToScene(point.x, point.y, 0,
            color.red, color.green, color.blue);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGLRenderer, shape: Shape3dMode, color: RGBColor): void
    {
        if (mouseIsDown)
        {
            let point = MouseHelper.mouseEventToWebGlPoints(event, canvas);
            renderer.addXYZPointToScene(point.x, point.y, 0,
            color.red, color.green, color.blue);
        }
    }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shape: Shape3dMode, color: RGBColor): void
    {
        let point = MouseHelper.mouseEventToWebGlPoints(event, canvas);
        renderer.addXYZPointToScene(point.x, point.y, 0,
            color.red, color.green, color.blue);
    }
}