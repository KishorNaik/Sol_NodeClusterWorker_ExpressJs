import { App } from '@/app';
import { ValidateEnv } from '@/shared/utils/validateEnv';
import { runNodeCluster } from './shared/utils/nodeClusterWorker';
import { demoModule } from './modules/demo';

ValidateEnv();

runNodeCluster(() => {
	const app = new App([...demoModule]);
	app.listen();
});
