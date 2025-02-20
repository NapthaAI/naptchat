import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { OrchestratorRunInput } from './OrchestratorRunInput.ts'
import type { OrchestratorRunOutput } from './OrchestratorRunOutput.ts'

/**
 * @description Successful Response
 */
export type OrchestratorCheckEndpointOrchestratorCheckPost200 = OrchestratorRunOutput

/**
 * @description Validation Error
 */
export type OrchestratorCheckEndpointOrchestratorCheckPost422 = HTTPValidationError

export type OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest = OrchestratorRunInput

export type OrchestratorCheckEndpointOrchestratorCheckPostMutationResponse = OrchestratorCheckEndpointOrchestratorCheckPost200

export type OrchestratorCheckEndpointOrchestratorCheckPostMutation = {
  Response: OrchestratorCheckEndpointOrchestratorCheckPost200
  Request: OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest
  Errors: OrchestratorCheckEndpointOrchestratorCheckPost422
}