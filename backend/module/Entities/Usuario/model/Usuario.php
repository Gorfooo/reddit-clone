<?php
namespace Reddit\Usuario\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Usuario")
*/
class Usuario
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="string", length=40)
    *
    * @var string
    */
    private $nome;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $banner;

    /**
    * @ORM\Column(type="string", length=60)
    *
    * @var string
    */
    private $email;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $foto;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $esconder_online;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $sobre;

    /**
    * @ORM\Column(type="integer")
    *
    * @var integer
    */
    private $karma;

    /**
    * @ORM\Column(type="string", length=25)
    *
    * @var string
    */
    private $senha;

    /**
    * @ORM\Column(type="date")
    */
    private $nascimento;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\PostComentarioResposta", mappedBy="id_usuario")
    */
    private $respostas;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\PostComentario", mappedBy="id_usuario")
    */
    private $comentarios;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\Post", mappedBy="id_usuario")
    */
    private $posts;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\PostAcoes", mappedBy="id_usuario")
    */
    private $post_acoes;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Aplicacao\Model\Denuncia", mappedBy="id_usuario")
    */
    private $denuncias;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Subreddit\Model\SolicitacaoModerador", mappedBy="id_usuario")
    */
    private $solicitacoes_moderador;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Subreddit\Model\SubredditUsuario", mappedBy="id_usuario")
    */
    private $subreddits;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Usuario\Model\Chat", mappedBy="id_usuario")
    */
    private $chats;

    /**
     * @ORM\ManyToMany(targetEntity="Reddit\Usuario\Model\Usuario")
     * @ORM\JoinTable(name="Seguidores",
     *     joinColumns={@ORM\JoinColumn(name="id_seguidor", referencedColumnName="id_usuario")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="id_seguido", referencedColumnName="id_usuario")}
     * )
     */
    private $seguidores;

    /**
     * @ORM\ManyToMany(targetEntity="Reddit\Usuario\Model\Usuario")
     * @ORM\JoinTable(name="Bloqueado",
     *     joinColumns={@ORM\JoinColumn(name="id_bloqueador", referencedColumnName="id_usuario")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="id_bloqueado", referencedColumnName="id_usuario")}
     * )
     */
    private $bloqueios;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->respostas = new \Doctrine\Common\Collections\ArrayCollection();
        $this->comentarios = new \Doctrine\Common\Collections\ArrayCollection();
        $this->posts = new \Doctrine\Common\Collections\ArrayCollection();
        $this->post_acoes = new \Doctrine\Common\Collections\ArrayCollection();
        $this->denuncias = new \Doctrine\Common\Collections\ArrayCollection();
        $this->solicitacoes_moderador = new \Doctrine\Common\Collections\ArrayCollection();
        $this->subreddits = new \Doctrine\Common\Collections\ArrayCollection();
        $this->chats = new \Doctrine\Common\Collections\ArrayCollection();
        $this->seguidores = new \Doctrine\Common\Collections\ArrayCollection();
        $this->bloqueios = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idUsuario.
     *
     * @return int
     */
    public function getIdUsuario()
    {
        return $this->id_usuario;
    }

    /**
     * Set nome.
     *
     * @param string $nome
     *
     * @return Usuario
     */
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    /**
     * Get nome.
     *
     * @return string
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * Set banner.
     *
     * @param string|null $banner
     *
     * @return Usuario
     */
    public function setBanner($banner = null)
    {
        $this->banner = $banner;

        return $this;
    }

    /**
     * Get banner.
     *
     * @return string|null
     */
    public function getBanner()
    {
        return $this->banner;
    }

    /**
     * Set email.
     *
     * @param string $email
     *
     * @return Usuario
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set foto.
     *
     * @param string|null $foto
     *
     * @return Usuario
     */
    public function setFoto($foto = null)
    {
        $this->foto = $foto;

        return $this;
    }

    /**
     * Get foto.
     *
     * @return string|null
     */
    public function getFoto()
    {
        return $this->foto;
    }

    /**
     * Set esconderOnline.
     *
     * @param string $esconderOnline
     *
     * @return Usuario
     */
    public function setEsconderOnline($esconderOnline)
    {
        $this->esconder_online = $esconderOnline;

        return $this;
    }

    /**
     * Get esconderOnline.
     *
     * @return string
     */
    public function getEsconderOnline()
    {
        return $this->esconder_online;
    }

    /**
     * Set sobre.
     *
     * @param string|null $sobre
     *
     * @return Usuario
     */
    public function setSobre($sobre = null)
    {
        $this->sobre = $sobre;

        return $this;
    }

    /**
     * Get sobre.
     *
     * @return string|null
     */
    public function getSobre()
    {
        return $this->sobre;
    }

    /**
     * Set karma.
     *
     * @param int $karma
     *
     * @return Usuario
     */
    public function setKarma($karma)
    {
        $this->karma = $karma;

        return $this;
    }

    /**
     * Get karma.
     *
     * @return int
     */
    public function getKarma()
    {
        return $this->karma;
    }

    /**
     * Set senha.
     *
     * @param string $senha
     *
     * @return Usuario
     */
    public function setSenha($senha)
    {
        $this->senha = $senha;

        return $this;
    }

    /**
     * Get senha.
     *
     * @return string
     */
    public function getSenha()
    {
        return $this->senha;
    }

    /**
     * Set nascimento.
     *
     * @param \DateTime $nascimento
     *
     * @return Usuario
     */
    public function setNascimento($nascimento)
    {
        $this->nascimento = $nascimento;

        return $this;
    }

    /**
     * Get nascimento.
     *
     * @return \DateTime
     */
    public function getNascimento()
    {
        return $this->nascimento;
    }

    /**
     * Add resposta.
     *
     * @param \Reddit\Posts\model\PostComentarioResposta $resposta
     *
     * @return Usuario
     */
    public function addResposta(\Reddit\Posts\model\PostComentarioResposta $resposta)
    {
        $this->respostas[] = $resposta;

        return $this;
    }

    /**
     * Remove resposta.
     *
     * @param \Reddit\Posts\model\PostComentarioResposta $resposta
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeResposta(\Reddit\Posts\model\PostComentarioResposta $resposta)
    {
        return $this->respostas->removeElement($resposta);
    }

    /**
     * Get respostas.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getRespostas()
    {
        return $this->respostas;
    }

    /**
     * Add comentario.
     *
     * @param \Reddit\Posts\model\PostComentario $comentario
     *
     * @return Usuario
     */
    public function addComentario(\Reddit\Posts\model\PostComentario $comentario)
    {
        $this->comentarios[] = $comentario;

        return $this;
    }

    /**
     * Remove comentario.
     *
     * @param \Reddit\Posts\model\PostComentario $comentario
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeComentario(\Reddit\Posts\model\PostComentario $comentario)
    {
        return $this->comentarios->removeElement($comentario);
    }

    /**
     * Get comentarios.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getComentarios()
    {
        return $this->comentarios;
    }

    /**
     * Add post.
     *
     * @param \Reddit\Posts\model\Post $post
     *
     * @return Usuario
     */
    public function addPost(\Reddit\Posts\model\Post $post)
    {
        $this->posts[] = $post;

        return $this;
    }

    /**
     * Remove post.
     *
     * @param \Reddit\Posts\model\Post $post
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removePost(\Reddit\Posts\model\Post $post)
    {
        return $this->posts->removeElement($post);
    }

    /**
     * Get posts.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPosts()
    {
        return $this->posts;
    }

    /**
     * Add postAco.
     *
     * @param \Reddit\Posts\model\PostAcoes $postAco
     *
     * @return Usuario
     */
    public function addPostAco(\Reddit\Posts\model\PostAcoes $postAco)
    {
        $this->post_acoes[] = $postAco;

        return $this;
    }

    /**
     * Remove postAco.
     *
     * @param \Reddit\Posts\model\PostAcoes $postAco
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removePostAco(\Reddit\Posts\model\PostAcoes $postAco)
    {
        return $this->post_acoes->removeElement($postAco);
    }

    /**
     * Get postAcoes.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPostAcoes()
    {
        return $this->post_acoes;
    }

    /**
     * Add denuncia.
     *
     * @param \Reddit\Aplicacao\Model\Denuncia $denuncia
     *
     * @return Usuario
     */
    public function addDenuncia(\Reddit\Aplicacao\Model\Denuncia $denuncia)
    {
        $this->denuncias[] = $denuncia;

        return $this;
    }

    /**
     * Remove denuncia.
     *
     * @param \Reddit\Aplicacao\Model\Denuncia $denuncia
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeDenuncia(\Reddit\Aplicacao\Model\Denuncia $denuncia)
    {
        return $this->denuncias->removeElement($denuncia);
    }

    /**
     * Get denuncias.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDenuncias()
    {
        return $this->denuncias;
    }

    /**
     * Add solicitacoesModerador.
     *
     * @param \Reddit\Subreddit\Model\SolicitacaoModerador $solicitacoesModerador
     *
     * @return Usuario
     */
    public function addSolicitacoesModerador(\Reddit\Subreddit\Model\SolicitacaoModerador $solicitacoesModerador)
    {
        $this->solicitacoes_moderador[] = $solicitacoesModerador;

        return $this;
    }

    /**
     * Remove solicitacoesModerador.
     *
     * @param \Reddit\Subreddit\Model\SolicitacaoModerador $solicitacoesModerador
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeSolicitacoesModerador(\Reddit\Subreddit\Model\SolicitacaoModerador $solicitacoesModerador)
    {
        return $this->solicitacoes_moderador->removeElement($solicitacoesModerador);
    }

    /**
     * Get solicitacoesModerador.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSolicitacoesModerador()
    {
        return $this->solicitacoes_moderador;
    }

    /**
     * Add subreddit.
     *
     * @param \Reddit\Subreddit\Model\SubredditUsuario $subreddit
     *
     * @return Usuario
     */
    public function addSubreddit(\Reddit\Subreddit\Model\SubredditUsuario $subreddit)
    {
        $this->subreddits[] = $subreddit;

        return $this;
    }

    /**
     * Remove subreddit.
     *
     * @param \Reddit\Subreddit\Model\SubredditUsuario $subreddit
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeSubreddit(\Reddit\Subreddit\Model\SubredditUsuario $subreddit)
    {
        return $this->subreddits->removeElement($subreddit);
    }

    /**
     * Get subreddits.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSubreddits()
    {
        return $this->subreddits;
    }

    /**
     * Add chat.
     *
     * @param \Reddit\Usuario\Model\Chat $chat
     *
     * @return Usuario
     */
    public function addChat(\Reddit\Usuario\Model\Chat $chat)
    {
        $this->chats[] = $chat;

        return $this;
    }

    /**
     * Remove chat.
     *
     * @param \Reddit\Usuario\Model\Chat $chat
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeChat(\Reddit\Usuario\Model\Chat $chat)
    {
        return $this->chats->removeElement($chat);
    }

    /**
     * Get chats.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getChats()
    {
        return $this->chats;
    }

    /**
     * Add seguidore.
     *
     * @param \Reddit\Usuario\Model\Usuario $seguidore
     *
     * @return Usuario
     */
    public function addSeguidore(\Reddit\Usuario\Model\Usuario $seguidore)
    {
        $this->seguidores[] = $seguidore;

        return $this;
    }

    /**
     * Remove seguidore.
     *
     * @param \Reddit\Usuario\Model\Usuario $seguidore
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeSeguidore(\Reddit\Usuario\Model\Usuario $seguidore)
    {
        return $this->seguidores->removeElement($seguidore);
    }

    /**
     * Get seguidores.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSeguidores()
    {
        return $this->seguidores;
    }

    /**
     * Add bloqueio.
     *
     * @param \Reddit\Usuario\Model\Usuario $bloqueio
     *
     * @return Usuario
     */
    public function addBloqueio(\Reddit\Usuario\Model\Usuario $bloqueio)
    {
        $this->bloqueios[] = $bloqueio;

        return $this;
    }

    /**
     * Remove bloqueio.
     *
     * @param \Reddit\Usuario\Model\Usuario $bloqueio
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeBloqueio(\Reddit\Usuario\Model\Usuario $bloqueio)
    {
        return $this->bloqueios->removeElement($bloqueio);
    }

    /**
     * Get bloqueios.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getBloqueios()
    {
        return $this->bloqueios;
    }
}
