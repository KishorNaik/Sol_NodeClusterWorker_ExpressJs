/*
Code:
npx ts-node-dev --inspect=4321 --pretty --transpile-only -r tsconfig-paths/register src/tools/aes/index.ts
*/

/*
import { AesDemoRequestDTO } from '@/modules/#demo/aesDemo/contracts/features/demo.Contract';
import { aes } from '@/shared/utils/aes';

// Request Body
export const requestBody: AesDemoRequestDTO = {
	firstName: '',
	lastName: '',
};

// Encrypt
const encryptAsync = async (): Promise<void> => {
	const encryptRequestBody = await aes.encryptAsync(JSON.stringify(requestBody));
	console.log('encryptRequestBody: ', encryptRequestBody);
};

// Decrypt
const decryptAsync = async (encryptRequestBody: string): Promise<void> => {
	const decryptRequestBody = await aes.decryptAsync(encryptRequestBody);
	console.log('decryptRequestBody: ', JSON.parse(decryptRequestBody));
};

encryptAsync()
	.then()
	.catch((ex) => console.log('ex: ', ex));

// decryptAsync("130b3f9afd550f94aedf7315176cb2e7:42cb98153d8ab2d95b1c6bc308ae228d6b5bb4306f25e3a5b18fb9d19cb99a746a332d5354880adfdc0bb27fe6edb94a")
//     .then()
//     .catch((ex)=>console.log("ex:",ex));


*/
