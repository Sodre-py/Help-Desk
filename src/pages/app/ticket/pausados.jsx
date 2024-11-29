
import { HeaderTickets } from './header/HeaderTicket'
import style from './pausados.module.css'
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";



export  function Pausados() {
    return(
        <>

         <HeaderTickets/>
         
        <div className={style.tickets}>
            <div className={style.hide}>
                <strong>Assunto</strong>
                <p>Falha no servidor</p>
            </div>
            <div className={style.hide}>
                <strong>Equipe responsável</strong>
                <p>Equipe António</p>
            </div>
            <div className={style.hide}>
                <strong>Status</strong>
                <div className={style.caixastatus}>
                    <p className={style.andamento}>
                    Em andamento
                    </p>
                    </div>
            </div>
            <div className={style.hide}>
                <strong>Data de abertura</strong>
                <p>21/04/2024</p>
            </div>
            <div className={style.hide}>
                <strong>Tempo de expiração</strong>
                <p>2 Horas</p>
                <Dialog.Root>
                <Dialog.Trigger asChild>
                <button>Ver mais</button>
                </Dialog.Trigger>
                	<Dialog.Portal>
                       
                    <Dialog.Overlay className={style.DialogOverlay} />
                    <Dialog.Content className={style.DialogContent} >
                    <Dialog.Title className={style.DialogTitle} >Ticket</Dialog.Title>
                    <Form.Root className={style.FormRoot}>
                    <Form.Field className={style.FormField} name="Descrição">
                    <Form.Label className={style.FormLabel}>Descrição</Form.Label>
                    <Form.Message className={style.FormMessage} match="valueMissing">
					Descreva seu problema
				    </Form.Message>
                    <Form.Message className={style.FormMessage} match="valueMissing">
					bota essa porra
				    </Form.Message>
                    <Form.Control asChild>
				        <input className={style.Input} type="email" required />
			        </Form.Control>
                    </Form.Field>
                    </Form.Root>
                    <div className={style.chat}>
                        <strong className={style.dentrochat}>Assunto</strong>
                        <span className={style.dentrochat}>Descrição</span>
                    </div>
                    <div className={style.chat}>
                    <strong className={style.dentrochat}>Assunto</strong>
                    <span className={style.dentrochat}>Descrição</span>
                    </div>
                    </Dialog.Content>
                	</Dialog.Portal>
                </Dialog.Root>
                       
                </div>
        </div>

        <div className={style.tickets}>
            <div className={style.hide}>
                <strong>Assunto</strong>
                <p>Falha no servidor</p>
            </div>
            <div className={style.hide}>
                <strong>Equipe responsável</strong>
                <p>Equipe António</p>
            </div>
            <div className={style.hide}>
                <strong>Status</strong>
                <div className={style.caixastatus}>
                    <p className={style.andamento}>
                    Em andamento
                    </p>
                    </div>
            </div>
            <div className={style.hide}>
                <strong>Data de abertura</strong>
                <p>21/04/2024</p>
            </div>
            <div className={style.hide}>
                <strong>Tempo de expiração</strong>
                <p>2 Horas</p>
                <Dialog.Root>
                <Dialog.Trigger asChild>
                <button>Ver mais</button>
                </Dialog.Trigger>
                	<Dialog.Portal>
                       
                    <Dialog.Overlay className={style.DialogOverlay} />
                    <Dialog.Content className={style.DialogContent} >
                    <Dialog.Title className={style.DialogTitle} >Ticket</Dialog.Title>
                    <Form.Root className={style.FormRoot}>
                    <Form.Field className={style.FormField} name="Descrição">
                    <Form.Label className={style.FormLabel}>Descrição</Form.Label>
                    <Form.Message className={style.FormMessage} match="valueMissing">
					Descreva seu problema
				    </Form.Message>
                    <Form.Message className={style.FormMessage} match="valueMissing">
					bota essa porra
				    </Form.Message>
                    <Form.Control asChild>
				        <input className={style.Input} type="email" required />
			        </Form.Control>
                    </Form.Field>
                    </Form.Root>
                    <div className={style.chat}>
                        <strong className={style.dentrochat}>Assunto</strong>
                        <span className={style.dentrochat}>Descrição</span>
                    </div>
                    <div className={style.chat}>
                    <strong className={style.dentrochat}>Assunto</strong>
                    <span className={style.dentrochat}>Descrição</span>
                    </div>
                    </Dialog.Content>
                	</Dialog.Portal>
                </Dialog.Root>
                       
                </div>
        </div>

        <div className={style.tickets}>
            <div className={style.hide}>
                <strong>Assunto</strong>
                <p>Falha no servidor</p>
            </div>
            <div className={style.hide}>
                <strong>Equipe responsável</strong>
                <p>Equipe António</p>
            </div>
            <div className={style.hide}>
                <strong>Status</strong>
                <div className={style.caixastatus}>
                    <p className={style.andamento}>
                    Em andamento
                    </p>
                    </div>
            </div>
            <div className={style.hide}>
                <strong>Data de abertura</strong>
                <p>21/04/2024</p>
            </div>
            <div className={style.hide}>
                <strong>Tempo de expiração</strong>
                <p>2 Horas</p>
                <Dialog.Root>
                <Dialog.Trigger asChild>
                <button>Ver mais</button>
                </Dialog.Trigger>
                	<Dialog.Portal>
                       
                    <Dialog.Overlay className={style.DialogOverlay} />
                    <Dialog.Content className={style.DialogContent} >
                    <Dialog.Title className={style.DialogTitle} >Ticket</Dialog.Title>
                    <Form.Root className={style.FormRoot}>
                    <Form.Field className={style.FormField} name="Descrição">
                    <Form.Label className={style.FormLabel}>Descrição</Form.Label>
                    <Form.Message className={style.FormMessage} match="valueMissing">
					Descreva seu problema
				    </Form.Message>
                    <Form.Message className={style.FormMessage} match="valueMissing">
					bota essa porra
				    </Form.Message>
                    <Form.Control asChild>
				        <input className={style.Input} type="email" required />
			        </Form.Control>
                    </Form.Field>
                    </Form.Root>
                    <div className={style.chat}>
                       chat
                    </div>
                    <div className={style.chat}>
                   chat
                    </div>
                    </Dialog.Content>
                	</Dialog.Portal>
                </Dialog.Root>
                       
                </div>
        </div>


        </> 
    )
}