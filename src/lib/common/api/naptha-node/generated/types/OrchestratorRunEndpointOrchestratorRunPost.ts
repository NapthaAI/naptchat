import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { OrchestratorRunInput } from './OrchestratorRunInput.ts'
import type { OrchestratorRunOutput } from './OrchestratorRunOutput.ts'

/**
 * @description Successful Response
 */
export type OrchestratorRunEndpointOrchestratorRunPost200 = OrchestratorRunOutput

/**
 * @description Validation Error
 */
export type OrchestratorRunEndpointOrchestratorRunPost422 = HTTPValidationError

export type OrchestratorRunEndpointOrchestratorRunPostMutationRequest = OrchestratorRunInput

export type OrchestratorRunEndpointOrchestratorRunPostMutationResponse = OrchestratorRunEndpointOrchestratorRunPost200

export type OrchestratorRunEndpointOrchestratorRunPostMutation = {
  Response: OrchestratorRunEndpointOrchestratorRunPost200
  Request: OrchestratorRunEndpointOrchestratorRunPostMutationRequest
  Errors: OrchestratorRunEndpointOrchestratorRunPost422
}