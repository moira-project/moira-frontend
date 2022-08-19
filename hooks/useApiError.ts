import { AxiosError } from 'axios';
import { useCallback } from 'react';
import {
	commonHandler,
	defaultHandler,
	handle401,
	handle403,
	handle40910001,
	handle40910002,
	handle500,
} from '../utils/apiErrorHandlers';

const defaultHandlers = {
	common: commonHandler,
	default: defaultHandler,
	401: {
		default: handle401,
	},
	403: {
		default: handle403,
	},
	409: {
		10001: handle40910001,
		10002: handle40910002,
	},
	500: {
		default: handle500,
	},
};

// 매개변수 handlers: 컴포넌트에서 재정의한 핸들러 모음
const useApiError = (handlers: () => void) => {
	// ...

	// 우선순위에 따른 핸들러의 선택과 실행
	const handleError = useCallback(
		(error) => {
			const httpStatus = error.status; // HTTP Status
			const serviceCode = error.response.meta.code; // 서비스 표준 에러 Code

			switch (true) {
				case handlers && handlers[httpStatus][serviceCode]:
					// 우선순위 1. 컴포넌트에서 (HTTP Status, 서비스 표준 에러 Code) Key 조합으로 재정의한 핸들러
					handlers[httpStatus][serviceCode]();
					break;
				case handlers && handlers[httpStatus]:
					// 우선순위 2. 컴포넌트에서 (HTTP Status) Key로 재정의한 핸들러
					handlers[httpStatus].default();
					break;
				case defaultHandlers[httpStatus][serviceCode]:
					// 우선순위 3. Hook에서 (HTTP Status, 서비스 표준 에러 Code) Key 조합으로 정의한 핸들러
					defaultHandlers[httpStatus][serviceCode]();
					break;
				case defaultHandlers[httpStatus]:
					// 우선순위 4. Hook에서 (HTTP Status) Key로 정의한 핸들러
					defaultHandlers[httpStatus].default();
					break;
				default:
					// 우선순위 5. 어디에서도 정의되지 못한 에러를 처리하는 핸들러
					defaultHandlers.default();
			}

			// 공통 처리 로직 수행
			defaultHandlers.common();
		},
		[handlers]
	);

	// ...
	return { handleError };
};

export default useApiError;
