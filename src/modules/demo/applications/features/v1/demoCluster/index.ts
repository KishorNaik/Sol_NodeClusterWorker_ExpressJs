import { StatusCodes } from 'http-status-codes';
import { Get, HttpCode, JsonController, OnUndefined, Res } from 'routing-controllers';
import { Response } from 'express';
import { OpenAPI } from 'routing-controllers-openapi';

@JsonController('/api/v1/demo')
@OpenAPI({ tags: ['demo'] })
export class DemoClusterController {
	@Get()
	@OpenAPI({ summary: 'demo endpoint', tags: ['demo'] })
	@HttpCode(StatusCodes.OK)
	@OnUndefined(StatusCodes.BAD_REQUEST)
	public async ping(@Res() res: Response) {
		const response = `pong`;
		return res.status(200).json({
			data: response,
      pid:process.pid
		});
	}
}
