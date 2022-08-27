import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC721AIERC721Receiver, ERC721AIERC721ReceiverInterface } from "../ERC721AIERC721Receiver";
export declare class ERC721AIERC721Receiver__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC721AIERC721ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721AIERC721Receiver;
}
